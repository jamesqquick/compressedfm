import styled from 'styled-components';
import { MixinSectionHeading } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';
import { PersonBio } from './PersonBio';

const TheHosts = () => (
  <StyledTheHosts>
    <div className="section-heading__wrapper">
      <h3 className="section-heading">The Hosts</h3>
    </div>
    {/* james */}
    <PersonBio
      className="james"
      avatar="/images/james.png"
      firstName="James"
      lastName="Q Quick"
      jobTitle="Technical Content Creator"
      largeBody="I am a JavaScript developer, speaker, and teacher with a passion for teaching developers through various mediums of content."
      body="I'm a firm believer in work-life balance, the on-going pursuit of personal happiness, and empowering others to take control of their career. My personal philosophy of “Learn Build Teach” has blossomed into a growing community of aspiring and established developers focused on helping each succeed."
      twitter="http://twitter.com/jamesqquick"
      github="http://github.com/jamesqquick"
      youtube="http://youtube.com/jamesqquick"
      twitch="http://twitch.com/jamesqquick"
      website="https://jamesqquick.com/"
      tiktok="https://www.tiktok.com/@jamesqquick"
    />

    {/* amy */}
    <PersonBio
      className="amy"
      avatar="/images/amy.png"
      firstName="Amy"
      lastName="Dutton"
      jobTitle="Director of Design"
      largeBody="I love️ teaching designers how to code and developers how to design."
      body="I'm a UI / UX designer and full-stack developer. I have over 20 years of web experience, officially making me a granny in Internet years. I live in Nashville, TN with my husband, 3 adorable kids, and 2 dogs. If I'm not sitting in front of my computer making things, I'm hanging out with family and friends. I love streaming all the things, playing cards, reading, and drinking coffee. Lots of coffee."
      twitter="http://twitter.com/selfteachme"
      instagram="http://instagram.com/selfteachme"
      github="http://github.com/ahaywood"
      youtube="http://youtube.com/c/selfteachme"
      twitch="http://twitch.com/selfteachme"
      website="https://selfteach.me/"
    />
  </StyledTheHosts>
);

const StyledTheHosts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  margin: 60px auto;
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;

  @media (${Breakpoints.medium}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading__wrapper {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;

    @media (${Breakpoints.medium}) {
      grid-column: span 2;
    }
  }

  .section-heading {
    ${MixinSectionHeading}
  }

  .james,
  .amy {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 ${(props) => props.theme.mobilePadding};
  }

  .james {
    @media (${Breakpoints.medium}) {
      border-right: 1px solid ${(props) => props.theme.white};
      padding-right: 85px;
    }

    @media (${Breakpoints.regular}) {
      padding-left: 0;
    }
  }

  .amy {
    @media (${Breakpoints.medium}) {
      padding: 0 ${(props) => props.theme.mobilePadding} 0 85px;
    }

    @media (${Breakpoints.regular}) {
      padding-right: 0;
    }
  }
`;

export { TheHosts };
