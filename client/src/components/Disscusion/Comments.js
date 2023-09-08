import React from 'react'
import './comm.css'
import { useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom'

const Comments = () => {
  const navigate = useNavigate();
  let [user_name, setName] = useState('');
  const [comment, setnewComment] = useState('');
  const [ok,setOk] = useState(false);

  const user = async (e) => {
    const response = await fetch('/home', {
      method: "GET",
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    let data = await response.json();
    setName(data.name);
  }

  const [blog, setBlog] = useState([]);
  const fun = async (e) => {
    const response = await fetch('/discuss', {
      method: "GET",
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    let data = await response.json();
    setBlog(data);
  }

  let commenting = async (e) => {
    e.preventDefault();
    setOk(false);
    const id = e.target.id;
    let response = await fetch('/threadcomment', {
      method: "POST",
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ id, user_name, comment })
    });
    let data = await response.json();
    if (response.status == 404 || !data) {
      window.alert("Please Log In");
      navigate('/');
    } else {
      window.alert("Comment Successful");
      navigate('/discussion');
    }
  }
  useEffect(() => {
    user();
    fun();
  },[])
  return (
    <>
      {/* <h1 className='post'>Add new post</h1>
      <form>
        <textarea placeholder='Write post here..!' value={post} onChange={(e) => setnewPost(e.target.value)}></textarea>
        <button onClick={commenting}>add blog</button>
      </form> */}
      {
        blog.map((value, ind) =>
          <>
          <div> sddjfkskjdfnsd</div>
            <div className="single-blog-box" >
              <div className='main-blog-area'>
                <h1 className='blog-title'>{value.title}</h1>
                <h5 className='blog-name'>By : {value.Uname}</h5>
                <hr />
                <h2 className='blog-post'>{value.post}</h2>
              </div>
              <hr />
              Comments
              <br />
              {value.comments.map((value1, ind1) =>
                <>
                  <div className='blog-comments'>
                    <label className='blog-reply-user'>User : {value1.user_name}</label>
                    <p className='blog-reply'>Reply : {value1.comment}</p>
                    <br />
                  </div>
                </>
              )
              }
              {!ok && <button className='reply-btn' onClick={() => setOk(true)}><i class="fa fa-reply"></i>Reply</button>}
              {ok && <form>
                <textarea placeholder='Comment here..!' rows={4} cols={50} onChange={(e) => setnewComment(e.target.value)}></textarea>
                <br />
                <button id={value._id} onClick={commenting}>Add a Comment</button>
              </form>}
            </div>
          </>
        )
      }
    </>
  )
}

export default Comments