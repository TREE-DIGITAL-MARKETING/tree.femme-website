import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
<VerticalTimeline lineColor="linear-gradient(to bottom, rgba(82 0 255),rgb(255, 45, 247), rgb(0 240 255 ))">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', border:"0px", color: '#FF2DF7' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=""
    iconStyle={{  boxShadow: 'none',background: 'linear-gradient(to bottom, rgb(87, 1, 254),rgb(107, 7, 254))', color: 'black',}}

    // icon={<WorkIcon />}
  >
    <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #1{' '}
        </span>
        The Ideation
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
        We create the images after having a sequence of thoughts delivered by our creative minds.
      </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', color: '#fff' }}
    contentArrowStyle={{ borderRight: 'px solid  rgb(255, 45, 247)' }}
    date=""
    iconStyle={{ boxShadow: 'none',background: 'rgb(141, 15, 252)', color: '#000000' }}
    // icon={<WorkIcon />}
  >
         <h3 className= "text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
           <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
            #2{' '}
           </span>Collective Planning</h3>
           <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            We plan the structure of each work by prioritising the goals of your organisation by having a thorough discussion among our team.
           </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=""
    iconStyle={{boxShadow:'none' ,background: 'rgb(202, 31, 249)', color: 'rgb(15, 15, 15)' }}
    // icon={<WorkIcon />}
  >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #3{' '}
        </span>
        The Development
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
        Our professional team of content creators and designers make wonders through their imagination and creativity.
      </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=""
    iconStyle={{ boxShadow:'none' ,background: 'rgb(202, 31, 249)', color: 'rgb(15, 15, 15)' }}
    // icon={<WorkIcon />}
  >
     <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #4{' '}
          </span>
           Market Research</h3>
            <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            It’s important to have a plan, but it is inevitable to study the current market scenario.
            </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=""
    iconStyle={{ boxShadow:'none' ,background: 'linear-gradient(to bottom, rgb(169, 110, 250), rgb(141, 132, 250))' ,color: 'rgb(15, 15, 15)' }}
    // icon={<WorkIcon />}
  >
      <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #5{' '}
        </span>
        Strategies and Tools
      </h3>
      <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
        We don’t go after age-old marketing formulae to leverage your brand’s potential. We work hard, find multiple strategies to elevate your brand.
      </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(15, 15, 15)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date=""
    iconStyle={{ background: 'rgb(82, 177, 252)',boxShadow:'none', color: 'rgb(82, 177, 252)' }}
    // icon={<WorkIcon />}
  >
   <h3 className="text-[18px] font-MontserratRegular font-[700] leading-[21.78px] text-white">
        <span className="bg-gradient-to-r via-[#5200FF] to-[#FF2DF7] from-[#00F0FF] bg-clip-text text-transparent tracking-wider">
          #6 {' '}
          </span>
          Digital Marketing</h3>
            <p className="mt-4 text-[#718096] font-MontserratRegular text-[14px] font-[400] leading-[20px]">
            To have a steady, permanent growth for your brand we do everything and anything as we know how to mold your brand digitally.
            </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )}

export default  Timeline