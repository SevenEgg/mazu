import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { QIAN_DATA } from "./config";
import {
  HomePage,
  Container,
  FormContainer,
  HomeTitle,
  QianCardContainer,
  QianCard,
  QianCardWrap,
  QianName,
  QianNum,
  QianContent,
  Btn
} from "./styles";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Home() {
  const [imageName, setImageName] = useState('保生大帝'); // 初始图片名称
  const cardRef = useRef(null);
  const qianName = "保生大帝六十籤";

  const handleGenerateCard = async () => {
    const cardContainerNode = cardRef.current;

    if (cardContainerNode) {
      const cardsNodes = cardContainerNode.childNodes;
      const promises = [];

      for (let i = 0; i < cardsNodes.length; i++) {
        const cardNode = cardsNodes[i];
        await delay(400); // 调整延时时间
        const promise = domtoimage.toPng(cardNode)
          .then(async (dataUrl) => {
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `${imageName}_card_${i + 1}.png`;
            a.click();
            
          })
          .catch((error) => {
            console.error('Error generating image:', error);
          });

        promises.push(promise);
      }
      console.log(promises)

      // 使用 Promise.all 等待所有异步操作完成
      try {
        await Promise.all(promises);
        console.log('All images downloaded successfully.');
      } catch (error) {
        console.error('Error downloading images:', error);
      }
    }
  };

  return (
    <HomePage>
      <HomeTitle>灵签卡片生成器</HomeTitle>
      <Container>
        <QianCardContainer ref={cardRef} >
          {QIAN_DATA.map(item => (
            < QianCard key={item.id}>
              <QianCardWrap>
                <QianName>{qianName}</QianName>
                <QianNum>{item.qian}</QianNum>
                <QianContent dangerouslySetInnerHTML={{ __html: item.qianyu }}>
                </QianContent>
              </QianCardWrap>
            </QianCard>
          ))}

          {/* <FormBox>
            <h6>文件名:</h6>
            <FormInput
               type="text"
               value={imageName}
               onChange={(e) => setImageName(e.target.value)}
            ></FormInput>
          </FormBox> */}

        </QianCardContainer>

        <FormContainer>
          <Btn onClick={handleGenerateCard}>保存图片</Btn>
        </FormContainer>

      </Container>

    </HomePage >
  );
}

// 多卡片
// function Home() {
//   const [imageName, setImageName] = useState('custom_image_name');
//   const cardContainerRef = useRef(null);

//   const cards = [
//     { id: 1, content: 'Card 1 Content' },
//     { id: 2, content: 'Card 2 Content' },
//     { id: 3, content: 'Card 3 Content' },
//     // Add more cards as needed
//   ];

//   const handleGenerateCards = async () => {
//     const cardContainerNode = cardContainerRef.current;

//     if (cardContainerNode) {
//       const cardsNodes = cardContainerNode.childNodes;

//       for (let i = 0; i < cardsNodes.length; i++) {
//         const cardNode = cardsNodes[i];
//         const canvas = await html2canvas(cardNode);
//         const imageURL = canvas.toDataURL('image/png');

//         const a = document.createElement('a');
//         a.href = imageURL;
//         a.download = `${imageName}_card_${i + 1}.png`;
//         a.click();
//       }
//     }
//   };

//   return (
//     <div>
//       <div ref={cardContainerRef}>
//         {cards.map((card) => (
//           <div key={card.id} style={{ border: '1px solid #000', padding: '20px', width: '300px', marginBottom: '20px' }}>
//             <h1>{card.content}</h1>
//             {/* Add more card content here */}
//           </div>
//         ))}
//       </div>

//       <div>
//         <label>
//           Image Name:
//           <input
//             type="text"
//             value={imageName}
//             onChange={(e) => setImageName(e.target.value)}
//           />
//         </label>
//       </div>

//       <button onClick={handleGenerateCards}>Generate Cards</button>
//     </div>
//   );
// }

export default Home;
