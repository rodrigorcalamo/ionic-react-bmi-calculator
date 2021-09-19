import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

const BmiResult: React.FC<{onResult: number }> = props => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
            <IonCardContent className="ion-text-center">
                <h2>Your Body-Mass-Index</h2>
                <h3>{props.onResult.toFixed(2)}</h3>
            </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;