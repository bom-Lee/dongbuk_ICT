import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  let navigate = useNavigate();

  const day_text_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };

  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day_text_dict[d];
  });

  let RateSum = 0;

  const week_rates = week_days.map((w, idx) => {
    const random = Math.floor(Math.random() * 5 + 1);
    RateSum += random;
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
        
    };
  });

  const average = (RateSum / 7).toFixed(1);
  const [avg, setAvg] = useState(average);


  return (
    <>
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 0",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>봄의 일주일은?</h3>

        {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day_${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}

              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid purple",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/review/${w.day}`);
                }}
              ></div>
            </div>
            
          );
        })}
<Hr />
<Score>
  <Text>평균 평점</Text>
  <br />
  <ScoreText>{avg}</ScoreText>
</Score>

<Btn onClick={() => {
          setAvg(parseInt(0).toFixed(1));
        }}
      >
        Reset
        </Btn>
      </div>
    </>
  );
};

export default Main;

const Hr = styled.hr`
  width: 300px;
  border: 0.5px solid #ddd;
  margin: 10px 0px 24px 24px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1794ff;
  margin-top: 16px;
`;

const ScoreText = styled.span`
  font-size: 34px;
  font-weight: bold;
  color: #1794ff;
`;

const Score = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  width: 260px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background-color: #1794ff;
  border: 1px solid #1794ff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  &:hover {
    opacity: 0.7;
  }
`;