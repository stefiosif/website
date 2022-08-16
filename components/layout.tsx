const Layout = (props: any) => {
  return (
  <div className="h-screen flex">
    <div className="max-w-md m-auto">{props.children}</div>
  </div>
  );
};

export default Layout;