import Logo from "./logo";
import Host from "./host";
import Title from "./title";
import Menu from "./menu";
const index = (props: any) => {
    return (
        <div className='tabsbackground'>
            <div className="d-flex align-items-start ">
                <div className="nav flex-column nav-pills me-3 nonactive-buton " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active nonactive-buton" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        Host Name
                    </button>
                    <button className="nav-link nonactive-buton" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        Logo
                    </button>
                    <button className="nav-link nonactive-buton" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        Title
                    </button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        Menu
                    </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <Host id={props.id} />
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <Logo id={props.id} />
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <Title id={props.id} />
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <Menu id={props.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index