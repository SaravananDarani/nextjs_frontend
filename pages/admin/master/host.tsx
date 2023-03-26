import React from 'react'
import { FormFieldInterface } from '@/common/interface/FormFieldInterface';
import { GlobleImport } from '@/pages/globleImport';
import { Constants } from '@/common/constants/constants';
const { FormInput,
    IndexServices, getServices, swal,
    useForm, validator, useRouter, adminLayout, HostInput, nextBase64,
    useEffect, useState
} = GlobleImport;

let idIndex = 0;
const host = (props: any) => {
    const [states, setStates]: any = useState({ name: "" });
    const router = useRouter();

    let id = props.id;
    let views: any = router.query["view"];
    let view = views ? nextBase64.decode(views) : "";
    let inputs: Array<FormFieldInterface> = HostInput;
    useEffect(() => {
        async function fetchEmployees() {
            var req = {
                dataId: { id: id ? id : Constants.webid },
                url: `${IndexServices.MasterServices.MasterUrl}/host`,
            }
            const response = await getServices.getIdData(req);
            const fetched = await response.data;
            setStates(fetched)
        }
        fetchEmployees();
    }, []);

    const submit = () => {
        handleUpdate()
    };

    const handleUpdate = () => {
        let dataJson: any = state;
        dataJson.id = id ? id : Constants.webid
        const req = {
            data: dataJson,
            url: `${IndexServices.MasterServices.MasterUrl}/host`
        }
        getServices.updateData(req).then((res: any) => {
            if (res.status === "success") {
                swal(res.message, { icon: "success" });

            } else {
                swal("Not added", { icon: "error" });
            }
        })
    };
    let initState = {}
    if (view === "") {
        initState = {
            name: "",
        };
    } else {
        initState = states
    }

    const { handleChange, handleSubmit, onBlur, state, errors }
        = useForm({ initState, callback: submit, validator, states });
    let isValidForm = Object.values(errors).filter((error) => typeof error !== "undefined").length === 0;


    return (
        <div className='content-box'>
            <b> localhost or live url</b>

            <div className='col-md-4'>
                <form>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            hidden={"false"}
                            onChange={handleChange}
                            defaultValue={state[input.name]}
                            errors={errors}
                            onBlur={onBlur}
                        />
                    ))}
                    <br></br>
                    <div className="text-end">
                        <button type="submit"
                            hidden={false}
                            disabled={!isValidForm}
                            onClick={handleSubmit}
                            className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default host
host.Layout = adminLayout