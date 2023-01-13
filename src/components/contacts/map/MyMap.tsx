import React, { useState } from 'react';
import MapGL,{ Source, Layer, Image }  from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import imageURL from './../../../assets/image/mapMark.png'

    export  function MyMap(){
        const [newPosition, setNewPosition] = useState<any>({position: "relative"})
         // const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png';
        const onMouseEnterHandler = () => {
            setNewPosition({position: "revert"})
        }

        const onMouseLeaveHandler = () => {
            setNewPosition({position: "relative"})
        }

        const [viewport, setViewport] = useState({

            latitude: 53.928610654360626,
            longitude: 27.66190368383058,
            zoom: 17
        });
        const data = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: [27.66180368383058, 53.928810654360626]
                    }
                }
            ]
        };

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
                    <Source id='point' type='geojson' data={data} />
                    <Image id='my-image' pixelRatio={1} image={imageURL} />
                    <Layer
                        id='image-layer'
                        type='symbol'
                        source='point'
                        layout={{
                            'icon-image': 'my-image',
                            'icon-size': 0.25
                        }}
                    />
                    {/*<Popup  longitude={27.66180368383058} latitude={53.928710654360626} closeButton={false} closeOnClick={false}>*/}
                    {/*    My office*/}
                    {/*</Popup>*/}
                </MapGL>
            </div>
        );
}
