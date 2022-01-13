import React from 'react'
import {Card,CardBody} from 'reactstrap';
function UserCard({user}) {
    return (
        <Card className="text-center mt-3 mb-4">
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.email}</div>
                <div className="text-primary">{user.phone}</div>
                <div className="text-primary">{user.address}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;
