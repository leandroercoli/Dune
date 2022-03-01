import GithubIcon from "../icons/github-icon";

function GithubBadge() {
  return (
    <div className="github-badge">
      <a
        href={"https://github.com/leandroercoli"}
        target="_blank"
        rel="noreferrer"
        aria-current="true"
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default GithubBadge;
