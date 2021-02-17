import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, SET_ERROR } from './types.js';
import { ipfs } from '../utils/ipfs.js';

//upload an image action
export const uploadImage = (buffer, title, description, tags, history) => async (dispatch, getState) => {
	
	dispatch({type: UPLOAD_IMAGE});

	ipfs.files.get(buffer, (error, result) => {
		if(error) {

			dispatch({
				type: SET_ERROR, 
				payload: {
					error
				}, 
			})

		} else {

			const ipfsHash = result[0].hash
			ipfs.files.get(ipfsHash, (error, files) => {
				console.log(files);
			})

			const web3State = getState().web3
			const contractInstance = web3State.contractInstance
			try {
				const txReceipt = contractInstance.uploadImage(
          			ipfsHash,
          			title,
          			description,
          			tags,
          			{
            			from: web3State.account,
          			}
        		)

        		console.log('uploadImage tx receipt', txReceipt);

        		const {
          			blockHash,
          			blockNumber,
          			transactionHash,
          			transactionIndex,
          			cumulativeGasUsed,
          			gasUsed,
        		} = txReceipt.receipt

        		const index = getState().image.images.length
          			? getState().image.images.length
          			: 0

          		const newImage = {
		          index,
		          ipfsHash,
		          title,
		          description,
		          tags,
		          uploadedOn: 'Pending',
		          blockHash,
		          blockNumber,
		          transactionHash,
		          transactionIndex,
		          cumulativeGasUsed,
		          gasUsed,
        		}

        		const localData = localStorage.getItem(web3State.account)
		        const localImages = localData ? JSON.parse(localData) : []
		        localImages.push(newImage)
		        localStorage.setItem(web3State.account, JSON.stringify(localImages))

		        dispatch({
		          type: UPLOAD_IMAGE_SUCCESS,
		          payload: newImage,
		        })

			} catch(error) {
				console.log('error', error);
				dispatch({
		          type: SET_ERROR,
		          payload: {
		            error,
		          },
		        })
		        throw error
			}
		}
	})
}		

// export const getImage = (index) => ({ type: GET_IMAGE, payload: index })

const convertTimestampToString = (timestamp) => {
  let tempDate = timestamp.toNumber()
  return tempDate !== 0 ? new Date(tempDate * 1000).toString() : null
}




