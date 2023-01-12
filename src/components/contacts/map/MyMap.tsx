import React, { useState } from 'react';
import MapGL,{ Popup }  from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


    export  function MyMap(){
        const [newPosition, setNewPosition] = useState<any>({position: "relative"})

        const onMouseEnterHandler = () => {
            setNewPosition({position: "revert"})
        }

        const onMouseLeaveHandler = () => {
            setNewPosition({position: "relative"})
        }

        const [viewport, setViewport] = useState({

            latitude: 53.928410654360626,
            longitude: 27.66190368383058,
            zoom: 16
        });


        return (
            <div className='mt-4' style={newPosition} onClick={onMouseEnterHandler}
                 onMouseLeave={onMouseLeaveHandler}>
                <MapGL
                    style={{width: '100%', height: '45vh'}}
                    mapStyle='mapbox://styles/mapbox/light-v9'
                    accessToken={"pk.eyJ1IjoibmF6YXJ1ay1kIiwiYSI6ImNsODk2NGI1azA0MWQzcG4zaGNjYjdibXMifQ.tDSjX8uOrU35vU8aZ-04wQ"}
                    onViewportChange={setViewport}
                    {...viewport}
                >
                    <Popup  longitude={27.66180368383058} latitude={53.928710654360626} closeButton={false} closeOnClick={false}>
                        My office
                    </Popup>
                </MapGL>
            </div>
        );
}
