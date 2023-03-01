import Header from "./web/header"

const layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default layout
