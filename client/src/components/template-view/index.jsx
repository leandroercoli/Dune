export default function TemplateView({ title = "", children }) {
  return (
    <div className="content-view padded-view-horizontal padded-view-vertical">
      <h2>{title}</h2>
      <div className="padded-view-horizontal padded-view-vertical">
        {children}
      </div>
    </div>
  );
}
