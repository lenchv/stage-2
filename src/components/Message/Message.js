import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

const Message = ({
  senderId = "",
  senderName = "",
  senderAvatarUrl = "",
  children,
  reactions = [],
  replies = [],
  ...rest
}) => {
  const repliesCount = Math.floor(Math.random() * 20) + 1;
  return (
    <div className="message" data-from={senderId} {...rest}>
      <img className="message__avatar message__avatar--big" src={senderAvatarUrl} alt="" />
      <div className="message__content">
        <div className="message__meta">
          <span className="message__author">{senderName}</span>
          <span className="message__timestamp">14:24</span>
        </div>
        <div className="message__text">
          {children}
        </div>
        <div className="message__reactions">
          {reactions.map(({ emoji, count }, index) => (
            <input key={`reactions-item-${index}`} className="message__reaction" type="checkbox" data-before={emoji} data-after={count} data-after-checked={count+1} />
          ))}
        </div>
        {
          replies && replies.length > 0 &&
          <div className="message__replies">
            {replies.map(({ name, avatarUrl }, index) => (
              <img key={`replies-item-${index}`} className="message__reply message__avatar" src={avatarUrl} alt={name} />
            ))}
            <div className="message__reply">
              <img className="message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5FEL3U-48e06b52480b-24" alt="" />
              <span className="message__replies--count">+{repliesCount - replies.length}</span>
            </div>
            <div className="message__replies--meta">
              <span className="message__replies--total">{repliesCount} replies</span>
              <span className="message__replies--last">Last reply today at 15:45</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
}


Message.propTypes = {
  senderId: PropTypes.string,
  senderName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  senderAvatarUrl: PropTypes.string,
  reactions: PropTypes.shape({
    emoji: PropTypes.string,
    count: PropTypes.number
  }),
  replies: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })
};

Message.defaultProps = {
  labels: {
    senderId: "",
    senderName: "",
    senderAvatarUrl: "",
    reactions: [],
    replies: []
  }
};

export default Message;