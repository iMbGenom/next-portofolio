import { Button } from 'reactstrap'

const ControlMenu = (props) => {
    return (
        <div className="control-menu">
            <h1 className="title"> Write Your Content </h1>
            <div className="status-box">
                { props.isLoading ? 'Saving..' : 'Saved' }
            </div>
            <Button disabled={props.isLoading} onClick={props.save} color="success">Save</Button>
        </div>
    )

}

export default ControlMenu