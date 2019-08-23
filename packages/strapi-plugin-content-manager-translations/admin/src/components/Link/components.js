import styled from 'styled-components';

const P = styled.p`
  display: block;
  width: 100%;
  text-decoration: none;
  margin-bottom: 0;
  span,
  i {
    color: #333740;
  }
  span {
    font-size: 13px;
  }
  i {
    width: 13px;
    height: 11px;
    margin-right: 10px;
  }
  .layout {
    display: inline-block;
    background-image: url('../../assets/icons/icon_layout.svg');
  }
  &:hover {
    span,
    i {
      color: #007eff;
    }
    .layout {
      background-image: url('../../assets/icons/icon_layout_hover.svg');
    }
  }
`;

export default P;
