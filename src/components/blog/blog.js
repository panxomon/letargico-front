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
        <div className="post">
          {data.map((data) => {
            return (
              <section>
                <div className="post-titulo">
                  <h2>{data.title}</h2>
                </div>
                <div className="post-fecha">
                  {formatDate(data.date)}
                </div>
                <div className="post-texto">
                  {data.text}
                </div>
                <br />
              </section>
            );
          })}
        </div>
    );
  };


export default Post;
