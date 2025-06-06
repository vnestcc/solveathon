import React, { useState } from 'react';

const SolveAThonTabs = () => {
  const [activeTab, setActiveTab] = useState('2024');

  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveTab('2024')}
          style={{
            padding: '15px 30px',
            backgroundColor: activeTab === '2024' ? '#6B46C1' : 'transparent',
            color: 'white',
            border: activeTab === '2024' ? 'none' : '2px solid white',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            transform: activeTab === '2024' ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={(e) => {
            if (activeTab !== '2024') {
              e.target.style.backgroundColor = '#333';
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== '2024') {
              e.target.style.backgroundColor = 'transparent';
            }
          }}
        >
          SOLVE-A-THON 2024
        </button>
        
        <button
          onClick={() => setActiveTab('2023')}
          style={{
            padding: '15px 30px',
            backgroundColor: activeTab === '2023' ? '#6B46C1' : 'transparent',
            color: 'white',
            border: activeTab === '2023' ? 'none' : '2px solid white',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            transform: activeTab === '2023' ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={(e) => {
            if (activeTab !== '2023') {
              e.target.style.backgroundColor = '#333';
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== '2023') {
              e.target.style.backgroundColor = 'transparent';
            }
          }}
        >
          SOLVE-A-THON 2023
        </button>
      </div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        height: '450px'
      }}>
        
        {/* 2024 Tab Content - UPRIGHT L-SHAPE */}
        {activeTab === '2024' && (
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '0px',
            width: '100%',
            height: '100%',
            opacity: 1,
            transition: 'opacity 0.5s ease'
          }}>
            {/* Upright L-shaped background */}
            <div style={{
              position: 'absolute',
              top: '0px',
              left: '200px',
              width: '600px',
              height: '480px',
              backgroundColor: '#F1DEE4',
              borderRadius: '30px',
              clipPath: 'polygon(0 0, 40% 0, 40% 35%, 100% 35%, 100% 100%, 0 100%)'
            }}>
            </div>

            {/* Stats Boxes - positioned in horizontal part of L */}
            <div style={{
              position: 'absolute',
              top: '200px',
              left: '340px',
              display: 'flex',
              gap: '20px',
              zIndex: 2
            }}>
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏆</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>WINNERS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3</div>
              </div>
              
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>PARTICIPANTS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>350+</div>
              </div>
              
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📋</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>REGISTRATIONS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>500+</div>
              </div>
            </div>

            {/* Winners Section - positioned in vertical part of L */}
            <div style={{
              position: 'absolute',
              top: '350px',
              left: '150px',
              zIndex: 2
            }}>
              {/* Horizontal connecting line */}
              <div style={{
                position: 'absolute',
                top: '25px',
                left: '25px',
                width: '200px',
                height: '4px',
                backgroundColor: '#6B46C1',
                zIndex: 1
              }}></div>
              
              <div style={{
                display: 'flex',
                gap: '70px',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>1st</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>2nd</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>3rd</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2023 Tab Content - UPRIGHT L-SHAPE (MIRRORED) */}
        {activeTab === '2023' && (
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '0px',
            width: '100%',
            height: '100%',
            opacity: 1,
            transition: 'opacity 0.5s ease'
          }}>
            {/* Mirrored Upright L-shaped background */}
            <div style={{
              position: 'absolute',
              top: '0px',
              right: '100px',
              width: '600px',
              height: '480px',
              backgroundColor: '#F1DEE4',
              borderRadius: '30px',
              clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 0 100%, 0 35%, 60% 35%)'
            }}>
            </div>

            {/* Stats Boxes - positioned in horizontal part of mirrored L */}
            <div style={{
              position: 'absolute',
              top: '200px',
              right: '340px',
              display: 'flex',
              gap: '20px',
              zIndex: 2
            }}>
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏆</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>WINNERS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3</div>
              </div>
              
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>👥</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>PARTICIPANTS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>250+</div>
              </div>
              
              <div style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '25px 20px',
                borderRadius: '15px',
                textAlign: 'center',
                minWidth: '130px',
                fontSize: '14px'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>📋</div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>REGISTRATIONS</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>400+</div>
              </div>
            </div>

            {/* Winners Section - positioned in vertical part of mirrored L */}
            <div style={{
              position: 'absolute',
              top: '350px',
              right: '150px',
              zIndex: 2
            }}>
              {/* Horizontal connecting line */}
              <div style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                width: '200px',
                height: '4px',
                backgroundColor: '#6B46C1',
                zIndex: 1
              }}></div>
              
              <div style={{
                display: 'flex',
                gap: '70px',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>1st</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>2nd</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#6B46C1',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>3rd</div>
                  <div style={{ color: '#6B46C1', fontWeight: 'bold', fontSize: '14px', marginBottom: '3px' }}>name</div>
                  <div style={{ color: '#6B46C1', fontSize: '14px' }}>name</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Label */}
      <div style={{
        textAlign: 'center',
        marginTop: '60px',
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
        letterSpacing: '3px'
      }}>
        GALLERY
      </div>
    </div>
  );
};

export default SolveAThonTabs;