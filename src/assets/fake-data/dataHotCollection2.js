import img from "../elves/dinesh.png";
import img2 from "../elves/sumanth.png";
import img3 from "../elves/megha.png";
import img4 from "../elves/harsha.png";
const dataHotCollection2 = [
  {
    img,
    avt: `https://avatars.dicebear.com/api/adventurer/${
      Math.random() * 100000
    }.svg`,
    name: "Chief Elf",
    position: "ERC-75",
    active: "active",
  },
  {
    img: img2,
    avt: `https://avatars.dicebear.com/api/adventurer/${
      Math.random() * 100000
    }.svg`,
    name: "Developer Elf",
    position: "ERC-75",
  },
  {
    img: img3,
    avt: `https://avatars.dicebear.com/api/adventurer/${
      Math.random() * 100000
    }.svg`,
    name: "Designer Elf",
    position: "ERC-75",
  },
  {
    img: img4,
    avt: `https://avatars.dicebear.com/api/adventurer/${
      Math.random() * 100000
    }.svg`,
    name: "BlockChain Elf",
    position: "ERC-75",
  },
];

export default dataHotCollection2;
