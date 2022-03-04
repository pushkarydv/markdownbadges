import { useState } from "react";
import {
  DatabaseBadges,
  LanguageBadges,
  FPL,
  versionControlBadges,
  SocialsBadges,
} from "../components/Badges";
import Preview from "../components/Preview";

export default function Generate() {
  const [languages, setLanguages] = useState([...LanguageBadges]);
  const [versionControl, setVersionControl] = useState([
    ...versionControlBadges,
  ]);
  const [database, setDatabase] = useState([...DatabaseBadges]);
  const [fpl, setFpl] = useState([...FPL]);
  const [social, setSocial] = useState([...SocialsBadges]);
  const [badgeType, setBadgeType] = useState("for-the-badge");

  function handleTechLang(techName) {
    const myNextList = [...languages];
    const current = languages.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setLanguages(myNextList);
  }
  function handleTechVersion(techName, selected) {
    const myNextList = [...versionControl];
    const current = versionControl.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setVersionControl(myNextList);
  }
  function handleTechDatabase(techName, selected) {
    const myNextList = [...database];
    const current = database.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setDatabase(myNextList);
  }
  function handleTechFpl(techName, selected) {
    const myNextList = [...fpl];
    const current = fpl.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setFpl(myNextList);
  }
  function handleSocial(name, selected) {
    const myNextList = [...social];
    const current = social.find((a) => a.name === name);
    current.isSelected = current.isSelected ? false : true;
    setSocial(myNextList);
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2 h-screen overflow-auto p-2 lg:p-4">
          {" "}
          <div className="text-center text-xl">
            Badge Type:{" "}
            <select
              name="badge-type"
              id="badge-type"
              onChange={(e) => {
                setBadgeType(e.target.value);
              }}
            >
              <option value="for-the-badge" defaultValue={true}>
                For The Badge
              </option>
              <option value="plastic">Plastic</option>
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="social">Social</option>
            </select>
          </div>
          <div className="text-slate-900 font-medium pt-6 pb-2">Languages</div>
          <div className="font-medium text-xl">
            <div className="text-slate-700">
              {languages.map((badge) => (
                <div
                  className={
                    "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                    (badge.isSelected
                      ? "bg-slate-700 border-slate-700 text-slate-50"
                      : "border-slate-300 text-slate-800")
                  }
                  key={badge.name}
                  onClick={() => handleTechLang(badge.name)}
                >
                  {" "}
                  <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                  <button
                    className={
                      "w-6  rounded-r-md font-medium " +
                      (badge.isSelected ? " text-slate-50 " : "text-slate-600")
                    }
                  >
                    <div
                      className={
                        "transition-all inline-block " +
                        (badge.isSelected ? " rotate-45" : "rotate-0")
                      }
                    >
                      +
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-slate-900 font-medium pt-6 pb-2">
              Framework & Libraries
            </div>
            <div className="text-slate-700">
              {fpl.map((badge) => (
                <div
                  className={
                    "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                    (badge.isSelected
                      ? "bg-slate-700 border-slate-700 text-slate-50"
                      : "border-slate-300 text-slate-800")
                  }
                  key={badge.name}
                  onClick={() => handleTechFpl(badge.name)}
                >
                  {" "}
                  <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                  <button
                    className={
                      "w-6  rounded-r-md font-medium " +
                      (badge.isSelected ? " text-slate-50 " : "text-slate-600")
                    }
                  >
                    <div
                      className={
                        "transition-all inline-block " +
                        (badge.isSelected ? " rotate-45" : "rotate-0")
                      }
                    >
                      +
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-slate-900 font-medium pt-6 pb-2">
              Databases
            </div>
            <div className="text-slate-700">
              {database.map((badge) => (
                <div
                  className={
                    "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                    (badge.isSelected
                      ? "bg-slate-700 border-slate-700 text-slate-50"
                      : "border-slate-300 text-slate-800")
                  }
                  key={badge.name}
                  onClick={() => handleTechDatabase(badge.name)}
                >
                  {" "}
                  <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                  <button
                    className={
                      "w-6  rounded-r-md font-medium " +
                      (badge.isSelected ? " text-slate-50 " : "text-slate-600")
                    }
                  >
                    <div
                      className={
                        "transition-all inline-block " +
                        (badge.isSelected ? " rotate-45" : "rotate-0")
                      }
                    >
                      +
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-slate-900 font-medium pt-6 pb-2">
              Version Control
            </div>
            <div className="text-slate-700">
              {versionControl.map((badge) => (
                <div
                  className={
                    "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                    (badge.isSelected
                      ? "bg-slate-700 border-slate-700 text-slate-50"
                      : "border-slate-300 text-slate-800")
                  }
                  key={badge.name}
                  onClick={() => handleTechVersion(badge.name)}
                >
                  {" "}
                  <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                  <button
                    className={
                      "w-6  rounded-r-md font-medium " +
                      (badge.isSelected ? " text-slate-50 " : "text-slate-600")
                    }
                  >
                    <div
                      className={
                        "transition-all inline-block " +
                        (badge.isSelected ? " rotate-45" : "rotate-0")
                      }
                    >
                      +
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-slate-900 font-medium pt-6 pb-2">Socials</div>
            <div className="text-slate-700">
              {SocialsBadges.map((badge) => (
                <div
                  className={
                    "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                    (badge.isSelected
                      ? "bg-slate-700 border-slate-700 text-slate-50"
                      : "border-slate-300 text-slate-800")
                  }
                  key={badge.name}
                  onClick={() => handleSocial(badge.name)}
                >
                  {" "}
                  <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                  <button
                    className={
                      "w-6  rounded-r-md font-medium " +
                      (badge.isSelected ? " text-slate-50 " : "text-slate-600")
                    }
                  >
                    <div
                      className={
                        "transition-all inline-block " +
                        (badge.isSelected ? " rotate-45" : "rotate-0")
                      }
                    >
                      +
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/2 h-screen overflow-auto p-2 lg:p-4">
          <Preview
            database={database}
            versionControl={versionControl}
            fpl={fpl}
            languages={languages}
            social={social}
            badgeType={badgeType}
          />
        </div>
      </div>
    </>
  );
}
