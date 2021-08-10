// Styles
// import styles from './Nav.module.scss';
import React from "react";

type Props = {
  name?: string;
  additionalClasses?: string[];
  html?: string;
  script?: string;
};

export const Placeholder = ({
  name = "",
  additionalClasses = [],
  html = "",
  script = "",
}: Props) => {
  // const scriptRef = useRef(null);
  //
  // useEffect(() => {
  //   const scriptTag = document.createElement("script");
  //   scriptTag.innerHTML = "debugger;console.log('crabicusAppend');debugger;";
  //
  //   scriptRef.current.appendChild(scriptTag);
  //
  //   return () => {
  //     scriptRef.current.removeChild(scriptTag);
  //   };
  // }, []);

  script = `
      // window.googletag = window.googletag || {cmd: []};
      // googletag.cmd.push(function() {
      //   debugger
      //   googletag
      //       .defineSlot(
      //           '/6355419/Travel/Europe/France/Paris', [300, 250], 'forum_mobile_hb-bottom')
      //       .addService(googletag.pubads());
      //   debugger
      //   googletag.enableServices();
      // });
      // googletag.cmd.push(function() {
      //   debugger
      //   googletag.display('forum_mobile_hb-bottom');
      // });

      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag
            .defineSlot(
                '/81006599/hmiru-woman/mobile/hb-bottom', 
                [
                    [320, 100],
                    [300, 250],
                    [320, 50],
                    [320, 250],
                    [1, 2],
                    [336, 280]
                ], 
                'forum_mobile_hb-bottom'
            )
            .addService(googletag.pubads());
        googletag.enableServices();
      });
      googletag.cmd.push(function() {
        googletag.display('forum_mobile_hb-bottom');
      });      
        `;

  const classNames = ["placeholder"].concat(additionalClasses).join(" ");

  return (
    <>
      <div
        className={classNames}
        data-name={name}
        dangerouslySetInnerHTML={{
          __html:
            html +
            "<script>console.log('crabicus1');" +
            script +
            "console.log('crabicus2');</script>",
        }}
      ></div>
    </>
  );
};

export default Placeholder;
