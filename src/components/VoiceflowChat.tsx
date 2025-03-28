import { useEffect } from 'react';

export default function VoiceflowChat() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '67d0540c131f7b4e2a935efd' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;

    // Append script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}