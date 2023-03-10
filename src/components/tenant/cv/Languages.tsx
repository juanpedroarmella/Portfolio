import { SxProps } from "@mui/material/styles";
import { Translate } from "next-translate";
import dynamic from "next/dynamic";

const GridBox = dynamic(() => import("@/components/atoms/GridBox"));
const FlexBox = dynamic(() => import("@/components/atoms/FlexBox"));
const List = dynamic(() => import("@mui/material/List"));
const ListItem = dynamic(() => import("@mui/material/ListItem"));
const ListItemText = dynamic(() => import("@mui/material/ListItemText"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const CheckIcon = dynamic(() => import("@mui/icons-material/Check"));
const CustomLink = dynamic(() => import("@/components/atoms/CustomLink"));

const SmallCheckIcon = () => {
  return <CheckIcon fontSize="small" sx={{ mt: 1 }} />;
};

interface Body2Props {
  children: React.ReactNode;
  sx?: SxProps;
}

const Body2: React.FC<Body2Props> = (props) => {
  return (
    <Typography variant="body2" color="gray" sx={props.sx}>
      {props.children}
    </Typography>
  );
};

interface LanguagesProps {
  t: Translate;
}

const Languages: React.FC<LanguagesProps> = (props) => {
  const { t } = props;
  return (
    <GridBox gap={2} width="100%">
      <Typography variant="h3">{t('languages.title')}</Typography>
      <List>
        <ListItem disablePadding>
          <FlexBox gap={1}>
            <SmallCheckIcon />
            <ListItemText primary={t('languages.spanish')} secondary={t('languages.native')} />
          </FlexBox>
        </ListItem>
        <ListItem disablePadding>
          <FlexBox gap={1}>
            <SmallCheckIcon />
            <GridBox>
              <ListItemText
                disableTypography
                sx={{ mt: 1 }}
                primary="English"
                secondary={
                  <GridBox mt={'0.3rem'}>
                    <Body2>C1 Advanced</Body2>
                    <Body2>Reading - C2 Proficient</Body2>
                    <Body2>Listening - B2 Upper Intermediate</Body2>
                    <Body2 sx={{ textDecoration: "underline" }}>
                      <CustomLink href="https://www.efset.org/cert/4funib" target='_blank'>
                        Test EF
                      </CustomLink>
                    </Body2>
                  </GridBox>
                }
              />
            </GridBox>
          </FlexBox>
        </ListItem>
      </List>
    </GridBox>
  );
};
export default Languages;
