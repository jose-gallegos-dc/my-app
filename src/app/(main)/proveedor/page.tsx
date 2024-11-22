export default function Proveedor() {
    return (
        <div className="card">
            <span className="text-900 text-xl font-bold mb-4 block">Create User</span>
            <div className="grid">
                <div className="col-12 lg:col-2">
                    <div className="text-900 font-medium text-xl mb-3">Profile</div>
                    <p className="m-0 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio.</p>
                </div>

                <div className="col-12 lg:col-10">
                    <div className="grid formgrid p-fluid">
                        <div className="field mb-4 col-12">
                            <label htmlFor="nickname" className="font-medium text-900">Nickname</label>
                            <input className="p-inputtext p-component" id="nickname" type="text" data-pc-name="inputtext" data-pc-section="root" />
                        </div>
                        {/* <div className="field mb-4 col-12">
                            <label for="nickname" className="font-medium text-900">Nickname</label>
                            <input className="p-inputtext p-component" id="nickname" type="text" data-pc-name="inputtext" data-pc-section="root">
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
