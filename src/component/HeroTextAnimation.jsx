import { TypeAnimation } from 'react-type-animation';

const HeroTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce Gaming accessories products',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce Electronics products',
        1000,
        'We produce Health & Personal Care products',
        1000,
        'We produce Home & Kitchen products',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{display: 'inline-block', color:'#C70039', fontWeight:'700',fontSize:'40px',textShadow: '2px 2px #581845'}}
      repeat={Infinity}
    />
  )
}
export default HeroTextAnimation;