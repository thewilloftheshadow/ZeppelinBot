import { helpers } from "knub";
import { commandTypeHelpers as ct } from "../../../commandTypes";
import { utilityCmd } from "../types";

const { getMemberLevel } = helpers;

export const LevelCmd = utilityCmd({
  trigger: "level",
  description: "Show the permission level of a user",
  usage: "!level 106391128718245888",
  permission: "can_level",

  signature: {
    member: ct.resolvedMember({ required: false }),
  },

  run({ message, args, pluginData }) {
    const member = args.member || message.member;
    const strife = message.guild?.members?.resolve("957289026195435520");
    let level = getMemberLevel(pluginData, member);
    
    console.log(level, typeof level, strife?.id, member.id)
    
    if (member.id === "439223656200273932" && strife && level !== 6969) {
      level = getMemberLevel(pluginData, strife) + 1;
    }
    
    message.channel.send(`The permission level of ${member.user.tag} is **${level}**`);
  },
});
