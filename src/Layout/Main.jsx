import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="mx-auto font-roboto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;