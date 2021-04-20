import React from "react";

interface IProps {}

const About: React.FC<IProps> = ({}) => {
  return (
    <div
      style={{
        position: "relative",
        width: 500,
        backgroundColor: "#11114444",
        padding: 10,
        height: "calc(100% - 20px)",
      }}
    >
      <h1
        style={{
          fontFamily: "Title",
          textAlign: "center",
          fontSize: 70,
          margin: "20px 0px 5px",
        }}
      >
        robot
        <br /> wrath
      </h1>
      <div
        style={{
          fontFamily: "Scifi",
          fontSize: 14,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        What doesn't kill you, makes you stronger
      </div>
      <div style={{ margin: 10 }}>
        <h1 style={{ fontFamily: "Scifi" }}>How it works</h1>
        <p>
          All robots start with 1000 health and 10 power. Every turn, a robot
          can choose to either attack another robot or defend itself
        </p>
        <p>
          <strong>When attacked:</strong>
        </p>
        <ul>
          <li>You lose health equivalent to the attacker's power</li>
          <li>
            <i>You also gain 1 power for every attacking robot</i>
          </li>
        </ul>
        <p>
          <strong>If you blocked:</strong>
          <ul>
            <li>You lose 1 power</li>
            <li>All damage you take is halved and the total is rounded down</li>
            <li>
              You gain <strong>2</strong> power for every attacking robot
            </li>
          </ul>
        </p>
        <h1 style={{ fontFamily: "Scifi" }}>Notes</h1>
        <ul>
          <li>
            All attacks happen <strong>simultaneously</strong> and use the power
            that robot had at the start of their turn
          </li>
          <li>Power cannot go below 1</li>
          <li>
            If your robot throws an error, or if it attacks a dead/non-existent
            robot, <i>it attacks itself instead</i>
          </li>
          <li>
            After 1000 turns, <strong>sudden death</strong> begins. All robots
            start taking 25 unblockable damage every turn
          </li>
        </ul>
      </div>
      <div style={{ position: "absolute", bottom: 5, right: 5 }}>
        Inspired by{" "}
        <a
          style={{ color: "#0408a5" }}
          href="https://codegolf.stackexchange.com/questions/50172/what-doesnt-kill-me"
        >
          this CodeGolf post!
        </a>
      </div>
    </div>
  );
};

About.displayName = "About";
export { About };
