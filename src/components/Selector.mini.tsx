import styled from 'styled-components';
import { Colors } from '../style/Colors';

export default function Selector({ selected }: { selected?: boolean; }) {
    return (
        <SelectorContainer>
            {selected && <SelectorContainerInside />}
        </SelectorContainer>
    );
}

const SelectorContainer = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${Colors.main};
    background-color: white;
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
`;

const SelectorContainerInside = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Colors.main};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;
