import { CommentBox, CommentContent, Author } from "../Styles";

function Comment(props) {
  console.log(props);

  return (
    <CommentBox>
      <CommentContent>{props.children}</CommentContent>
      <Author>{props.author}</Author>
    </CommentBox>
  );
}
export default Comment;
