import React from 'react';
import { useParams } from 'react-router-dom';

export  function TrackDetails() {
    const params = useParams()
    return <div>
        Recuperer les donnees du track qui a l'id :
        {params.id}
    </div>;
}
