import React, { useState, useEffect } from "react";
import "./style.scss";
import { Avatar } from "@material-ui/core";
import { I_MESSENGER, I_NOTIFICATION } from "@toannb/assets/svg-path";
import { Icon, TooltipInner, StyledTooltip, popperProps } from "@toannb/common";
import {
  TEXTS,
  MENU_INFO,
  LogoIcon,
  NotificationBadge,
  MenuBadge,
} from "@toannb/components/header";

function Header() {
  const [profile, setProfile] = useState(null);
  const { texSearch } = TEXTS;
  const [HOME] = MENU_INFO;
  const [current, setCurrent] = useState(HOME.path);

  const handleGetUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { profile } = user.additionalUserInfo;
    setProfile(profile);
  };

  const handleChooseMenu = (path) => {
    localStorage.setItem("currentMenu", path);
    setCurrent(path);
  };
  const isCurrent = (item) => {
    return current === item;
  };

  useEffect(() => {
    setCurrent(localStorage.getItem("currentMenu"));
    handleGetUser();
  }, [setCurrent, current]);

  const NotificationWithBadge = (
    <div className="header-right__notification-badge">
      <Icon
        className="header-right__notification-icon"
        icon={I_NOTIFICATION}
        title="Game"
      />
    </div>
  );
  const MenuWithBadge = (item) => (
    <Icon
      size={item.size}
      color={isCurrent(item.path) ? item.colorFilled : item.color}
      icon={isCurrent(item.path) ? item.iconFilled : item.icon}
      title={item.title}
      className={`header-middle__${item.iconClassName}`}
    />
  );

  return (
    <div id="header">
      <div className="header-left">
        <LogoIcon />
        <div className="header-left__search">
          <label className="header-left__label">
            <div className="header-left__search-history" />
            <i className="header-left__search-icon" />
            <input
              type="text"
              className="header-left__field"
              placeholder={texSearch}
            />
          </label>
        </div>
      </div>
      <div className="header-middle">
        {MENU_INFO &&
          MENU_INFO.map((item, i) => {
            return (
              <div
                className="header-middle__menu-container"
                onClick={() => {
                  handleChooseMenu(item.path);
                }}
                key={i}
              >
                <StyledTooltip
                  title={TooltipInner(item.title)}
                  PopperProps={popperProps}
                >
                  <a href="#">
                    <div
                      className={`header-middle__${item.wrapClassName}${
                        isCurrent(item.path) ? "--active" : "--de-active"
                      }`}
                    >
                      <MenuBadge
                        component={MenuWithBadge(item)}
                        content={item.info && item.info}
                        color="secondary"
                      />
                    </div>
                    <div
                      className={`header-middle__menu${
                        isCurrent(item.path) ? "--active" : "--de-active"
                      }`}
                    />
                  </a>
                </StyledTooltip>
              </div>
            );
          })}
      </div>
      <div className="header-right">
        <div className="header-right__avatar" title="Avatar">
          <div className="header-right__avatar-container">
            <Avatar
              src={profile && profile.picture.data.url}
              alt="user avatar"
              className="header-right__avatar-img"
            />
            <span>{profile && profile.first_name}</span>
          </div>
        </div>
        <StyledTooltip title={TooltipInner("Create")} PopperProps={popperProps}>
          <div className="header-right__create-btn">
            <i className="header-right__create-icon" />
          </div>
        </StyledTooltip>
        <StyledTooltip
          title={TooltipInner("Messenger")}
          PopperProps={popperProps}
        >
          <div className="header-right__messenger-btn">
            <Icon
              className="header-right__messenger-icon"
              icon={I_MESSENGER}
              title="Game"
            />
          </div>
        </StyledTooltip>
        <StyledTooltip
          title={TooltipInner("Notification")}
          PopperProps={popperProps}
        >
          <div className="header-right__notification-btn">
            <NotificationBadge
              component={NotificationWithBadge}
              content="2"
              color="secondary"
            />
          </div>
        </StyledTooltip>
        <StyledTooltip
          title={TooltipInner("Account")}
          PopperProps={popperProps}
        >
          <div className="header-right__account-btn">
            <i className="header-right__account-icon" />
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
}

export { Header };
