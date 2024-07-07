import { useState } from "react";
import { Button } from "react-bootstrap";


export default function MemberCard ({ member }) {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    function handleToggleDetail () {
        setIsDetailOpen(cur => !cur);
    }

    return (
        <div className={`member-1 member ${member.right ? "right" : ""}`}>
            <div className="member-major">
                <div className="member-photo-div">
                    <span className="member-photo-border"></span>
                    <span className="member-photo-border"></span>
                    <span className="member-photo-border"></span>
                    <div className="content">
                        <div className="member-photo-cover">
                            <img src={member.imageSrc} alt="Member-1" className="member-photo-img" />
                        </div>
                    </div>
                </div>
                <div className="member-name">
                    {member.name}
                </div>
            </div>
            <div className="member-minor">
                <div className="member-profession">{member.profession}</div>
                <div className="member-detail">
                    <div className={`member-detail-text ${member.right ? "less-width" : ""}`}>
                        {member.detail}
                    </div>
                    <div className="member-skillset">
                        {
                            member.skills?.map(skill => 
                            <Button className="member-skill">
                                {skill.name}
                                {skill?.icon}
                            </Button>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}