import React, { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
// import { QIAN_DATA } from "./config";
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
  Btn,
  FormBox,
  FormInput
} from "./styles";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Home() {
  const [qianName, setImageName] = useState('六十甲子籤'); // 初始图片名称
  const cardRef = useRef(null);
  const [QIAN_DATA, setJsonData] = useState([]);

  const onOpenFile = ()=>{
    document.querySelector("#files").click();
  }

  const handleJsonFileChange = (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      try {
        const parsedData = JSON.parse(fileReader.result);
        setJsonData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        setJsonData(null);
      }
    };

    fileReader.readAsText(e.target.files[0]);
  };

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
            a.download = `${qianName}_card_${i + 1}.png`;
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
        </QianCardContainer>

        <FormContainer>
        <FormBox>
            <h6>签名:</h6>
            <FormInput
               type="text"
               value={qianName}
               onChange={(e) => setImageName(e.target.value)}
            ></FormInput>
          </FormBox>
          <FormBox>
            <Btn onClick={()=>onOpenFile()}>选择文件</Btn>
            <input
                type="file"
                accept=".json"
                onChange={handleJsonFileChange}
                className='hidden'
                id="files"
              />
          </FormBox>
          
          {QIAN_DATA.length>0 &&  <Btn onClick={handleGenerateCard}>保存图片</Btn>}
         
        </FormContainer>

      </Container>

    </HomePage >
  );
}

export default Home;
