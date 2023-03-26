import React, { useRef } from "react";
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';

const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, LogoInput, nextBase64,
    useEffect, useState, Constants
} = GlobleImport;
import Editer from './Editor'

const index = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [states, setStates]: any = useState({ name: "" });
    const [file, setFile]: any = useState("");
    const [dataId, setDataId]: any = useState("");
    const [path, setPath]: any = useState("");
    const router = useRouter();
    let id = "";
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = LogoInput;

    const onChangeHandler = (event: any) => {
        setStates({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        let images: any[] = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        let message = `${images.length} valid image(s) selected`
        setStates({ images, message })

        async function fetchEmployees() {
            images.map(async image => {
                const datas = new FormData();
                datas.append("image", image, image.name);
                datas.append("type", 'logo');
                var req = {
                    data: datas,
                    url: `${IndexServices.BasicServices.uploadUrl}`,
                }
                let response = await getServices.addData(req);
                const fetched = response.data;
                const files = response.data.filename;
                const paths = Constants.imgPath;
                let http = ` ${paths}${files}`;
                setFile(files)
                setPath(http)
            });
        }
        fetchEmployees();
    }
    let initState = {}
    if (view === "") {
        initState = { name: "" };
    } else {
        initState = states
    }
    const { onBlur, state, errors } = useForm({ initState, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;

    const submit = () => {
        let dataJson: any = {
            webid: Constants.webid,
            name: file,
            title: title,
            subtitle: subTitle,
            id: dataId ? dataId : ''
        };
        const req = {
            data: dataJson,
            url: `${IndexServices.MasterServices.aboutsUrl}`
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === "success") swal(res.message, { icon: "success" });
            else swal("Not added", { icon: "error" });
        })
    }

    useEffect(() => {
        async function fetchEmployees() {
            var req = {
                dataId: { id: id ? id : Constants.webid },
                url: `${IndexServices.MasterServices.aboutsUrl}`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data[0];
            setDataId(fetched.id)
            setFile(fetched.img)
            setTitle(fetched.title)
            setSubTitle(fetched.subtitle)
        }
        fetchEmployees();
        setEditorLoaded(true);
    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            hidden={"false"}
                            onChange={onChangeHandler}
                            defaultValue={state[input.name]}
                            errors={errors}
                            onBlur={onBlur}
                        />
                    ))}
                    {file && <img src={`${Constants.imgPath}${file}`} width={100} />}
                    <br></br>
                    <br></br>
                </div>
                <div className='col-md-8 '>
                    <Editer
                        name="title"
                        onChange={(data: any) => {
                            setTitle(data);
                        }}
                        value={title ? title : ""}
                        editorLoaded={editorLoaded}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 '>
                    <Editer
                        name="subtitle"
                        onChange={(data: any): void => {
                            setSubTitle(data);
                        }}
                        value={subTitle ? subTitle : ""}
                        editorLoaded={editorLoaded}
                    />
                </div>
                <div className="text-end">
                    <button type="submit"
                        hidden={false}
                        disabled={!isValidForm}
                        onClick={submit}
                        className="btn btn-primary">
                        Upload
                    </button>
                </div>
            </div>
        </>
    )
}

export default index
index.Layout = adminLayout