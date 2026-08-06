import { Trans } from "@lingui-solid/solid/macro";
import { styled } from "styled-system/jsx";
import { Column, Text, Button } from "@revolt/ui";
import { useNavigate } from "@revolt/routing";

const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "40px",
    textAlign: "center",
    color: "var(--md-sys-color-on-surface)",
  },
});

/**
 * Native 403Cord Server Discovery Page
 */
export function Discover() {
  const navigate = useNavigate();

  return (
    <Container>
      <Column gap="lg" align="center">
        <Text size="xl" weight="bold">
          <Trans>403Cord Discovery</Trans>
        </Text>
        <Text style={{ opacity: 0.7, "max-width": "500px" }}>
          <Trans>Explore servers and communities on 403Cord.</Trans>
        </Text>
        <Button onPress={() => navigate("/app")}>
          <Trans>Back to Home</Trans>
        </Button>
      </Column>
    </Container>
  );
}
