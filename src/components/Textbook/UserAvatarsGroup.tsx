import {Avatar, AvatarGroup, AvatarGroupProps} from "rsuite";
import React from "react";
import {observer} from "mobx-react-lite";
import {User} from "@/data/model/User";


export interface UserAvatarsGroupProps extends AvatarGroupProps {
    users : User[];
    maxUsersToDisplay?: number;
}

const DEFAULT_MAX_USERS_TO_DISPLAY = 5;

export const UserAvatarsGroup = observer((props : UserAvatarsGroupProps) => {

    let {users, maxUsersToDisplay, ...rest} = props;
    let maxUsers;

    if(!maxUsersToDisplay) {
        maxUsers = DEFAULT_MAX_USERS_TO_DISPLAY;
    } else {
        maxUsers = maxUsersToDisplay;
    }

    return (
        <AvatarGroup stack {...rest}>
            {users
                .filter((_user, i) => i < maxUsers)
                .map(user => (
                    <Avatar size={"sm"} circle key={user.name} src={user.avatar} alt={user.name} />
                ))}
            <Avatar size={"sm"} circle style={{ background: '#111' }}>
                +{users.length - maxUsers}
            </Avatar>
        </AvatarGroup>
    );
});