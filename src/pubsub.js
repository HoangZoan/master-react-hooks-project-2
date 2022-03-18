import PubNub from "pubnub";
import pubnubConfig from "./pubnub.config.json";
import { v4 as uuid } from "uuid";

const pubnub = new PubNub({ ...pubnubConfig, uuid: uuid() });

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

pubnub.addListener({
  message: (messageObject) => {
    console.log("messageObject", messageObject);
  },
});

setTimeout(() => {
  pubnub.publish({
    message: "foo",
    channel: MESSAGE_CHANNEL,
  });
}, 1000);
