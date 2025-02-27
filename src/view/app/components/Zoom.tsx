import * as React from 'react';
import { FC, useContext } from 'react';
import { CoordinateContext } from '../contexts/CoordinateContext';

const Zoom: FC = () => {
    const { preview, previewCover } = useContext(CoordinateContext);

    return (
        <div className='zoom-container'>
            <img
                className='zoom-cursor'
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIhSURBVHhe7dztCoIwAIZR6/7v2Zwf2dqGutooOKdAsN5/8mBBDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8k9t6hMvG+VlnuvBce0A/c7DC45Jx/CR0AFWe4TkdrdCqlx1AL1F4DqO1xCqIdgA9JOEpRmuPVZDsAFrLhieJVhyrILsDaKkYnme00lgFxR1AKwfhKb4mWNS6r0f4ovnO6jZlSZiA35C/U3r7GJiJVn4H0FAanvx3VtO7ovPpDqCxODyFWG1eohXvADrYw3MQq80arX0H0MkSnpOx2kzREixq+cU81T4Jj39rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDrD8ACsgGSl3BVi9gAAAABJRU5ErkJggg=='
                alt=''
                draggable='false'
            />
            <img className='zoom-cover' src={previewCover} alt='' draggable='false' />
            <img className='zoom-content' src={preview} alt='' draggable='false' />
        </div>
    );
};

export default Zoom;
