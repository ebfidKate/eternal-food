import classNames from "classnames";
import './Author.css';

const Author = ({ author }) => {
  return (
    <div className={
      classNames(
        "author",
        "author--" + author.class
      )}>by {author.nickname}</div>
  );
}

export default Author;
