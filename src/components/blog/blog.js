import {data} from '../post/post'

function formatDate(date) {
    return date.toLocaleDateString();
} 
  
export const Avatar = (props) => {
    return (<img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />)
}

export const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      {/* <Avatar user={props.user} /> */}
      {props.user.name}
    </div>)
}

export const Post = () => {
    return (
        <div className="stock-container">
          {data.map((data) => {
            return (
              <div>
                <UserInfo user= {data.author} />
                  <div className="Comment-text">
                    <h2>{data.title}</h2>
                    <div className="Comment-date">
                      {formatDate(data.date)}
                    </div>
                    {data.text}
                    </div>
                  <br />
              </div>
             
            );
          })}
        </div>
    );
  };


export default Post;
