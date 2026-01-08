import React, { useState } from 'react';

const clubs = {
  'Driver': 265,
  '3 Wood': 235,
  'Hybrid': 220,
  '4 Iron': 200,
  '5 Iron': 180,
  '6 Iron': 165,
  '7 Iron': 155,
  '8 Iron': 145,
  '9 Iron': 135,
  'PW': 125,
  '52°': 115,
  'SW': 90,
  'LW': 65
};

const holes = [
  {
    number: 1,
    par: 4,
    yardage: 387,
    handicap: 3,
    description: "Dogleg left opening hole through towering pines. Fairway narrows at the corner.",
    strategy: {
      tee: "Driver aimed right-center to avoid the trees on the left dogleg. Landing zone is 240-260 yards out.",
      approach: "Mid-iron approach to a well-protected green. Watch for the false front.",
      miss: "Miss right for easier up-and-down. Left brings trouble."
    },
    fairwayWidth: "narrow",
    greenSize: "medium",
    hazards: ["trees left", "bunker right"]
  },
  {
    number: 2,
    par: 3,
    yardage: 202,
    handicap: 9,
    description: "Demanding par 3 with a tiered green protected by bunkers.",
    strategy: {
      tee: "This is a 4-iron shot. Aim center-green and let it feed toward the pin.",
      approach: null,
      miss: "Long is better than short here. The back bunker is easier than the front."
    },
    fairwayWidth: null,
    greenSize: "large",
    hazards: ["bunker front-left", "bunker right"]
  },
  {
    number: 3,
    par: 5,
    yardage: 550,
    handicap: 7,
    description: "Reachable par 5 for long hitters. Risk-reward second shot with water right.",
    strategy: {
      tee: "Driver down the left side. Avoid the right fairway bunker at 250 yards.",
      approach: "Layup to 100 yards if not going for it. Water guards the right side of the green.",
      miss: "Bail out left on approach. Water right is dead."
    },
    fairwayWidth: "wide",
    greenSize: "medium",
    hazards: ["bunker right @ 250", "water right of green"]
  },
  {
    number: 4,
    par: 4,
    yardage: 403,
    handicap: 13,
    description: "Straightaway par 4 with elevation change. Uphill approach to elevated green.",
    strategy: {
      tee: "Driver to the center. Generous landing area.",
      approach: "Club up for the uphill shot. Green slopes back-to-front.",
      miss: "Below the hole is key. Downhill putts are treacherous."
    },
    fairwayWidth: "wide",
    greenSize: "medium",
    hazards: ["bunker left of green"]
  },
  {
    number: 5,
    par: 4,
    yardage: 442,
    handicap: 1,
    description: "Number 1 handicap hole. Tight driving hole with dogleg right. Precision required.",
    strategy: {
      tee: "3-wood to the left-center fairway. Bring driver at your own risk.",
      approach: "Long iron or hybrid into a shallow, well-bunkered green.",
      miss: "Short and left. Don't challenge the bunkers right."
    },
    fairwayWidth: "narrow",
    greenSize: "small",
    hazards: ["bunkers both sides", "trees right"]
  },
  {
    number: 6,
    par: 4,
    yardage: 419,
    handicap: 11,
    description: "Sweeping dogleg left. Pine-lined fairway rewards a draw off the tee.",
    strategy: {
      tee: "Driver with a draw starting at the right bunker. Cuts the corner nicely.",
      approach: "Mid-iron to a green with significant back-to-front slope.",
      miss: "Anywhere below hole is acceptable. Above is three-putt territory."
    },
    fairwayWidth: "medium",
    greenSize: "large",
    hazards: ["bunker right @ 240", "trees left"]
  },
  {
    number: 7,
    par: 3,
    yardage: 208,
    handicap: 5,
    description: "Long par 3 over wetlands. All carry to a bulkheaded green.",
    strategy: {
      tee: "Hybrid is the play. Middle of the green - no hero shots.",
      approach: null,
      miss: "Right is the only bailout. Left is water and bulkhead."
    },
    fairwayWidth: null,
    greenSize: "medium",
    hazards: ["water front/left", "bulkhead green"]
  },
  {
    number: 8,
    par: 4,
    yardage: 350,
    handicap: 17,
    description: "Short risk-reward par 4. Drive it near the green or play safe.",
    strategy: {
      tee: "3-wood to 100 yards, or driver to challenge the green. Bunkers guard the front.",
      approach: "Simple wedge from the layup zone.",
      miss: "Short of green. Don't get caught in the greenside bunkers."
    },
    fairwayWidth: "medium",
    greenSize: "small",
    hazards: ["bunkers front of green"]
  },
  {
    number: 9,
    par: 5,
    yardage: 462,
    handicap: 15,
    description: "Shorter par 5 to finish the front nine. Birdie opportunity with smart play.",
    strategy: {
      tee: "Driver to set up two-putt range in two, or comfortable wedge distance.",
      approach: "Lay up to preferred wedge distance. Green is well-protected.",
      miss: "Front-left gives the best angle and recovery option."
    },
    fairwayWidth: "wide",
    greenSize: "medium",
    hazards: ["bunker right of green", "trees left"]
  },
  {
    number: 10,
    par: 4,
    yardage: 389,
    handicap: 6,
    description: "Strong start to the back nine. Slight dogleg with premium on accuracy.",
    strategy: {
      tee: "Driver down the left side to open up approach angle.",
      approach: "8-iron to 9-iron. Green has two tiers - match the pin position.",
      miss: "Below the hole on the correct tier is paramount."
    },
    fairwayWidth: "medium",
    greenSize: "large",
    hazards: ["bunker right @ 245", "trees both sides"]
  },
  {
    number: 11,
    par: 3,
    yardage: 198,
    handicap: 18,
    description: "Easiest par 3 on paper, but don't be fooled. Bunkers surround the putting surface.",
    strategy: {
      tee: "4 or 5 iron depending on wind. Dead center is safe.",
      approach: null,
      miss: "Long is okay. Short in bunkers makes par difficult."
    },
    fairwayWidth: null,
    greenSize: "medium",
    hazards: ["bunkers front and sides"]
  },
  {
    number: 12,
    par: 4,
    yardage: 354,
    handicap: 14,
    description: "Driveable par 4 for the bold. Narrow green creates challenge.",
    strategy: {
      tee: "3-wood to 90-100 yards, or driver toward the green avoiding right bunkers.",
      approach: "SW or LW to a shallow green. Be precise with distance.",
      miss: "Short and center. Green runs away from you."
    },
    fairwayWidth: "medium",
    greenSize: "small",
    hazards: ["bunker right @ 230", "bunker left of green"]
  },
  {
    number: 13,
    par: 5,
    yardage: 630,
    handicap: 12,
    description: "Monster par 5. Not reachable in two - play for position.",
    strategy: {
      tee: "Driver to maximum distance. The longer the better.",
      approach: "Hybrid or 3-wood for second, lay up to wedge distance for third.",
      miss: "Keep it in play. Don't compound mistakes trying to recover distance."
    },
    fairwayWidth: "wide",
    greenSize: "large",
    hazards: ["fairway bunkers both sides", "green complex bunkers"]
  },
  {
    number: 14,
    par: 4,
    yardage: 367,
    handicap: 10,
    description: "Short par 4 with a raised, well-bunkered green. Scoring opportunity.",
    strategy: {
      tee: "3-wood to 130-150 leaves comfortable iron approach.",
      approach: "8 or 9 iron. Green slopes severely - study your line.",
      miss: "Below the hole always. This green is fast and slopes toward you."
    },
    fairwayWidth: "medium",
    greenSize: "medium",
    hazards: ["bunker left of green", "false front"]
  },
  {
    number: 15,
    par: 3,
    yardage: 182,
    handicap: 16,
    description: "Beautiful par 3 with water. Carry all the way to the green.",
    strategy: {
      tee: "5-iron or 6-iron depending on wind. Favor the right side.",
      approach: null,
      miss: "Anywhere but wet. Right is safe. Left is the drink."
    },
    fairwayWidth: null,
    greenSize: "medium",
    hazards: ["water left and front", "bunker right"]
  },
  {
    number: 16,
    par: 4,
    yardage: 416,
    handicap: 2,
    description: "Second hardest hole. Long par 4 with a demanding approach.",
    strategy: {
      tee: "Driver, favor the right side to avoid fairway bunker left.",
      approach: "Long iron or hybrid to a three-tiered green. Find the right tier.",
      miss: "Pin high, any side. Distance control is everything."
    },
    fairwayWidth: "narrow",
    greenSize: "large",
    hazards: ["fairway bunker left @ 250", "greenside bunkers"]
  },
  {
    number: 17,
    par: 5,
    yardage: 523,
    handicap: 8,
    description: "Reachable par 5 for two good shots. Risk increases as you approach the green.",
    strategy: {
      tee: "Driver to left-center. Fairway slopes right so aim accordingly.",
      approach: "3-wood or hybrid for eagle attempt, or lay up to 100 for comfortable wedge.",
      miss: "Leave yourself uphill. Downhill chips are nearly impossible here."
    },
    fairwayWidth: "medium",
    greenSize: "medium",
    hazards: ["bunkers both sides @ 250", "water behind green"]
  },
  {
    number: 18,
    par: 4,
    yardage: 420,
    handicap: 4,
    description: "Signature finishing hole. Downhill approach over lake to three-tiered green.",
    strategy: {
      tee: "Driver to left-center. Sets up best angle to attack the green over water.",
      approach: "Commit to your club. Water protects the front and right of a narrow green.",
      miss: "Left of the green. Right is wet. Long is okay."
    },
    fairwayWidth: "medium",
    greenSize: "small",
    hazards: ["water front and right of green", "bunker left"]
  }
];

function getClubForDistance(distance) {
  const sortedClubs = Object.entries(clubs).sort((a, b) => b[1] - a[1]);
  for (const [club, yds] of sortedClubs) {
    if (yds <= distance + 10) {
      return { club, distance: yds };
    }
  }
  return { club: 'LW', distance: 65 };
}

function calculateStrategy(hole) {
  const yardage = hole.yardage;
  const par = hole.par;
  
  if (par === 3) {
    const teeClub = getClubForDistance(yardage);
    return {
      shots: [{ type: 'tee', club: teeClub.club, distance: teeClub.distance, remaining: yardage - teeClub.distance }],
      totalShots: 1
    };
  }
  
  if (par === 4) {
    const teeShot = Math.min(clubs['Driver'], yardage - 80);
    const remaining = yardage - teeShot;
    const approachClub = getClubForDistance(remaining);
    return {
      shots: [
        { type: 'tee', club: 'Driver', distance: teeShot, remaining: remaining },
        { type: 'approach', club: approachClub.club, distance: approachClub.distance, remaining: remaining - approachClub.distance }
      ],
      totalShots: 2
    };
  }
  
  if (par === 5) {
    const teeShot = clubs['Driver'];
    const afterTee = yardage - teeShot;
    
    if (afterTee <= clubs['3 Wood'] + 20) {
      const secondClub = getClubForDistance(afterTee);
      return {
        shots: [
          { type: 'tee', club: 'Driver', distance: teeShot, remaining: afterTee },
          { type: 'second', club: secondClub.club, distance: secondClub.distance, remaining: afterTee - secondClub.distance }
        ],
        totalShots: 2,
        goForIt: true
      };
    }
    
    const layupDistance = Math.min(clubs['3 Wood'], afterTee - 100);
    const afterLayup = afterTee - layupDistance;
    const approachClub = getClubForDistance(afterLayup);
    return {
      shots: [
        { type: 'tee', club: 'Driver', distance: teeShot, remaining: afterTee },
        { type: 'layup', club: '3 Wood', distance: layupDistance, remaining: afterLayup },
        { type: 'approach', club: approachClub.club, distance: approachClub.distance, remaining: 0 }
      ],
      totalShots: 3
    };
  }
}

function HoleVisualization({ hole, strategy }) {
  const yardage = hole.yardage;
  const maxWidth = 100;
  
  const getPosition = (distance) => {
    return ((yardage - distance) / yardage) * maxWidth;
  };
  
  let landingZones = [];
  let cumulative = 0;
  
  strategy.shots.forEach((shot, idx) => {
    cumulative += shot.distance;
    landingZones.push({
      position: getPosition(yardage - cumulative),
      label: shot.club,
      distance: cumulative,
      remaining: yardage - cumulative,
      type: shot.type
    });
  });

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #1a472a 0%, #2d5a3d 50%, #1a472a 100%)',
      borderRadius: '16px',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '24px'
    }}>
      {/* Rough texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
        opacity: 0.3,
        pointerEvents: 'none'
      }} />
      
      {/* Fairway */}
      <div style={{
        position: 'relative',
        height: '180px',
        marginBottom: '20px'
      }}>
        {/* Fairway strip */}
        <div style={{
          position: 'absolute',
          left: '5%',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          height: hole.fairwayWidth === 'narrow' ? '50px' : hole.fairwayWidth === 'wide' ? '80px' : '65px',
          background: 'linear-gradient(90deg, #2d6b3d 0%, #3d8b4d 30%, #3d8b4d 70%, #2d6b3d 100%)',
          borderRadius: '4px',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
        }} />
        
        {/* Tee box */}
        <div style={{
          position: 'absolute',
          left: '2%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '30px',
          background: 'linear-gradient(90deg, #4a9960, #3d8b4d)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <span style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold' }}>TEE</span>
        </div>
        
        {/* Green */}
        <div style={{
          position: 'absolute',
          right: '2%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: hole.greenSize === 'small' ? '35px' : hole.greenSize === 'large' ? '55px' : '45px',
          height: hole.greenSize === 'small' ? '30px' : hole.greenSize === 'large' ? '45px' : '38px',
          background: 'radial-gradient(ellipse, #5bc07a 0%, #3d9b5d 100%)',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            background: '#000',
            borderRadius: '50%',
            boxShadow: '0 0 2px rgba(0,0,0,0.5)'
          }} />
        </div>
        
        {/* Flag */}
        <div style={{
          position: 'absolute',
          right: hole.greenSize === 'small' ? 'calc(2% + 17px)' : hole.greenSize === 'large' ? 'calc(2% + 27px)' : 'calc(2% + 22px)',
          top: 'calc(50% - 45px)',
          width: '2px',
          height: '40px',
          background: '#333'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '2px',
            width: '0',
            height: '0',
            borderTop: '8px solid #e63946',
            borderRight: '12px solid transparent'
          }} />
        </div>
        
        {/* Landing zones */}
        {landingZones.map((zone, idx) => (
          <div key={idx} style={{
            position: 'absolute',
            left: `${5 + zone.position * 0.85}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}>
            {/* Landing zone marker */}
            <div style={{
              width: '50px',
              height: '50px',
              border: `3px dashed ${zone.type === 'tee' ? '#ffd700' : zone.type === 'layup' ? '#87ceeb' : '#ff6b6b'}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              animation: 'pulse 2s infinite'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: zone.type === 'tee' ? '#ffd700' : zone.type === 'layup' ? '#87ceeb' : '#ff6b6b',
                borderRadius: '50%'
              }} />
            </div>
            
            {/* Label */}
            <div style={{
              position: 'absolute',
              top: idx % 2 === 0 ? '-45px' : '55px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: zone.type === 'tee' ? '#ffd700' : zone.type === 'layup' ? '#87ceeb' : '#ff6b6b',
              color: zone.type === 'tee' ? '#000' : '#000',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              {zone.club} → {zone.remaining}y left
            </div>
          </div>
        ))}
        
        {/* Yardage markers */}
        {[100, 150, 200, 250].filter(y => y < hole.yardage).map(marker => (
          <div key={marker} style={{
            position: 'absolute',
            right: `${5 + (marker / hole.yardage) * 85}%`,
            bottom: '10px',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.6)',
            transform: 'translateX(50%)'
          }}>
            {marker}
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.8)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', background: '#ffd700', borderRadius: '50%' }} />
          <span>Tee Shot</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', background: '#87ceeb', borderRadius: '50%' }} />
          <span>Layup</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', background: '#ff6b6b', borderRadius: '50%' }} />
          <span>Approach</span>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default function HattiesburgCourseGuide() {
  const [currentHole, setCurrentHole] = useState(0);
  const hole = holes[currentHole];
  const strategy = calculateStrategy(hole);

  const nextHole = () => setCurrentHole((prev) => (prev + 1) % 18);
  const prevHole = () => setCurrentHole((prev) => (prev - 1 + 18) % 18);
  const goToHole = (index) => setCurrentHole(index);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1b0f 0%, #1a2f1c 50%, #0d1b0f 100%)',
      fontFamily: "'Playfair Display', Georgia, serif",
      color: '#fff',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255,215,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#ffd700',
          margin: '0 0 8px 0',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Hattiesburg Country Club
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.7)',
          margin: 0,
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '1px'
        }}>
          Course Strategy Guide • Par 71 • 6,902 Yards
        </p>
      </div>

      {/* Hole selector */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '6px',
        marginBottom: '24px'
      }}>
        {holes.map((h, idx) => (
          <button
            key={idx}
            onClick={() => goToHole(idx)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: idx === currentHole ? '2px solid #ffd700' : '1px solid rgba(255,255,255,0.3)',
              background: idx === currentHole ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.05)',
              color: idx === currentHole ? '#ffd700' : 'rgba(255,255,255,0.7)',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {h.number}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {/* Hole info header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div>
            <div style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#ffd700',
              lineHeight: 1
            }}>
              Hole {hole.number}
            </div>
            <div style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '4px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Handicap #{hole.handicap}
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '8px'
            }}>
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>PAR</div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>{hole.par}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>YARDS</div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#87ceeb' }}>{hole.yardage}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '24px',
          fontStyle: 'italic'
        }}>
          {hole.description}
        </p>

        {/* Hole visualization */}
        <HoleVisualization hole={hole} strategy={strategy} />

        {/* Club Recommendations */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffd700',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>🏌️</span> Your Club Selection
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {strategy.shots.map((shot, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                borderLeft: `3px solid ${shot.type === 'tee' ? '#ffd700' : shot.type === 'layup' ? '#87ceeb' : '#ff6b6b'}`
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: shot.type === 'tee' ? 'rgba(255,215,0,0.2)' : shot.type === 'layup' ? 'rgba(135,206,235,0.2)' : 'rgba(255,107,107,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: shot.type === 'tee' ? '#ffd700' : shot.type === 'layup' ? '#87ceeb' : '#ff6b6b'
                }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {shot.type.charAt(0).toUpperCase() + shot.type.slice(1)} Shot: <span style={{ color: '#ffd700' }}>{shot.club}</span>
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {shot.distance} yards → {shot.remaining > 0 ? `${Math.max(0, shot.remaining)} yards remaining` : 'On green'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {strategy.goForIt && (
            <div style={{
              marginTop: '12px',
              padding: '10px',
              background: 'rgba(76,175,80,0.2)',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#81c784',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '16px' }}>⚡</span>
              Reachable in two! Go for the green if conditions allow.
            </div>
          )}
        </div>

        {/* Strategy tips */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffd700',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>📋</span> Strategy Notes
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: "'Inter', sans-serif" }}>
            <div>
              <div style={{ fontSize: '12px', color: '#ffd700', marginBottom: '4px', fontWeight: '600' }}>OFF THE TEE</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{hole.strategy.tee}</div>
            </div>
            
            {hole.strategy.approach && (
              <div>
                <div style={{ fontSize: '12px', color: '#87ceeb', marginBottom: '4px', fontWeight: '600' }}>APPROACH</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{hole.strategy.approach}</div>
              </div>
            )}
            
            <div>
              <div style={{ fontSize: '12px', color: '#ff6b6b', marginBottom: '4px', fontWeight: '600' }}>MISS IT HERE</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{hole.strategy.miss}</div>
            </div>
          </div>
        </div>

        {/* Hazards */}
        {hole.hazards && hole.hazards.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px'
          }}>
            {hole.hazards.map((hazard, idx) => (
              <span key={idx} style={{
                padding: '6px 12px',
                background: hazard.includes('water') ? 'rgba(33,150,243,0.2)' : 
                           hazard.includes('bunker') ? 'rgba(255,193,7,0.2)' : 'rgba(76,175,80,0.2)',
                border: `1px solid ${hazard.includes('water') ? 'rgba(33,150,243,0.4)' : 
                                     hazard.includes('bunker') ? 'rgba(255,193,7,0.4)' : 'rgba(76,175,80,0.4)'}`,
                borderRadius: '20px',
                fontSize: '12px',
                color: hazard.includes('water') ? '#64b5f6' : 
                       hazard.includes('bunker') ? '#ffd54f' : '#81c784',
                fontFamily: "'Inter', sans-serif"
              }}>
                {hazard.includes('water') ? '💧' : hazard.includes('bunker') ? '🏜️' : '🌲'} {hazard}
              </span>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <button
            onClick={prevHole}
            style={{
              flex: 1,
              padding: '14px 20px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            ← Hole {currentHole === 0 ? 18 : currentHole}
          </button>
          <button
            onClick={nextHole}
            style={{
              flex: 1,
              padding: '14px 20px',
              background: 'linear-gradient(135deg, #ffd700, #ffb700)',
              border: 'none',
              borderRadius: '8px',
              color: '#000',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Hole {currentHole === 17 ? 1 : currentHole + 2} →
          </button>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          padding: '20px',
          borderTop: '1px solid rgba(255,215,0,0.2)',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: "'Inter', sans-serif"
        }}>
          Club distances personalized to your game • Former PGA Tour Magnolia Classic Host
        </div>
      </div>
    </div>
  );
}
