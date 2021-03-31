import { CommentBox, CommentContent, Author } from "../Styles";
import gsap from "gsap";

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
