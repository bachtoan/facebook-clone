import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/avatar.jpg";
import "./style.scss";
import { I_MESSENGER, I_NOTIFICATION } from "../../assets/images/svg";
import { Icon, TooltipInner, StyledTooltip } from "../common";
import { LogoIcon } from "./LogoIcon";
import { Avatar } from "@material-ui/core";
import { TEXTS, MENU_INFO } from "./Constants";
import { NotificationBadge, MenuBadge } from "./CustomBadge";

function Header() {
  const { texSearch } = TEXTS;
  const [HOME] = MENU_INFO;
  const [current, setCurrent] = useState(HOME.path);

  const handleChooseMenu = (path) => {
    localStorage.setItem("currentMenu", path);
    setCurrent(path);
  };

  const isCurrent = (item) => {
    return current === item;
  };

  useEffect(() => {
    setCurrent(localStorage.getItem("currentMenu"));
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
        {/* <img className="header-left__logo" src={logo} alt="Header Logo" /> */}
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
                <StyledTooltip title={TooltipInner(item.title)}>
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
              src={avatar}
              alt="Avatar"
              className="header-right__avatar-img"
            />
            <span>Nguyễn</span>
          </div>
        </div>
        <StyledTooltip title={TooltipInner("Create")}>
          <div className="header-right__create-btn">
            <i className="header-right__create-icon" />
          </div>
        </StyledTooltip>
        <StyledTooltip title={TooltipInner("Messenger")}>
          <div className="header-right__messenger-btn">
            <Icon
              className="header-right__messenger-icon"
              icon={I_MESSENGER}
              title="Game"
            />
          </div>
        </StyledTooltip>
        <StyledTooltip title={TooltipInner("Notification")}>
          <div className="header-right__notification-btn">
            <NotificationBadge
              component={NotificationWithBadge}
              content="2"
              color="secondary"
            />
          </div>
        </StyledTooltip>
        <StyledTooltip title={TooltipInner("Account")}>
          <div className="header-right__account-btn">
            <i className="header-right__account-icon" />
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
}

export { Header };
