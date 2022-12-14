import React from "react";

const Hours = ({hours}) => {
    return (
        <div className="d-flex">
            <div>
                Sunday:<br/>
                Monday:<br/>
                Tuesday:<br/>
                Wednesday:<br/>
                Thursday:<br/>
                Friday:<br/>
                Saturday:<br/>
            </div>
            <div className="ps-4">
                {hours.sunday}<br/>
                {hours.monday}<br/>
                {hours.tuesday}<br/>
                {hours.wednesday}<br/>
                {hours.thursday}<br/>
                {hours.friday}<br/>
                {hours.saturday}<br/>
            </div>
        </div>
    );
};
export default Hours;