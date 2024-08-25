import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Speakupcomp(props) {
  // Format the date and time
  const date = new Date(props.time);
  const formattedDate = date.toLocaleDateString(); // e.g., 08/25/2024
  const formattedTime = date.toLocaleTimeString(); // e.g., 11:14 AM
  const infoid = localStorage.getItem("infoid");
  // Comment section state
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  // Fetch comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/speakup/${props.postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [props.postId]);

  // Handle adding a new comment
  const handleAddComment = async () => {
    if (commentText.trim()) {
      try {
        const response = await axios.post(`http://localhost:5000/speakup/${props.postId}/comment`, {
          text: commentText,
         infoid:infoid
        

        });

        // Update the comments state with the new comment
        setComments(response.data.comments);
        setCommentText('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  return (
    <div className='bg-[#181818] m-2 p-4 rounded-lg shadow-lg'>
      <div className='flex w-full justify-between text-[#5e5e5e]'>
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
      <p className='text-[#d1d1d1] py-4 text-lg'>{props.description}</p>

      {/* Comment Section */}
      <div className='mt-4'>
        <h3 className='text-[#d1d1d1] font-semibold mb-2'>Comments</h3>
        {comments.length > 0 ? (
          <ul className='text-[#b3b3b3]'>
            {comments.map((comment, index) => (
              <div className='flex items-center'> {comment.user} NGO :   <li key={index} className='mb-1 ml-2 p-2 bg-[#2c2c2c] rounded'>
               
              {comment.text} {/* Display the comment text */}
            </li></div>
             
            ))}
          </ul>
        ) : (
          <p className='text-[#5e5e5e]'>No comments yet.</p>
        )}
        <div className='flex mt-2'>
          <input
            type='text'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className='flex-grow p-2 text-[#d1d1d1] bg-[#2c2c2c] rounded-l-lg outline-none'
            placeholder='Write a comment...'
          />
          <button
            onClick={handleAddComment}
            className='bg-[#4CAF50] text-white px-4 py-2 rounded-r-lg hover:bg-[#45a049]'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
