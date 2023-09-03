import Stack from "@mui/material/Stack";
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import SkillGroup from "./components/SkillsGroup";

export default function SkillsSection() {
    return (
        <section id="skills">
            <Typography variant="h3">Skills</Typography>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <SkillGroup
                    skillTitle={"Embedded Software Engineering"}
                    firstSkillDesc={`Experienced in developing low-level C/C++ drivers for
                                        microcontrollers custom hardware peripherals.`}
                    secondSkillDesc={`Well-versed in implementation of serial communication
                                        protocols: CAN, I²C, SPI, UART.`}
                    thirdSkillDesc={`Practiced in creating custom embedded operating systems
                                        using the Yocto Project environment and developing
                                        embedded applications using the Qt/QML framework.`}
                />
                <SkillGroup
                    skillTitle={"Desktop Application Development"}
                    firstSkillDesc={`Skilled in designing, developing, and debugging Windows
                                        and Linux desktop applications.`}
                    secondSkillDesc={`Experienced in engineering custom software using C++, C#,
                                        Java, and Python.`}
                    thirdSkillDesc={`Knowledgable in implementing networking features for
                                        desktop applications that require secure connections
                                        to personal, local, or wide area networks.`}
                />
                <SkillGroup
                    skillTitle={"Full-Stack Web Application Development"}
                    firstSkillDesc={`Proficient in legacy and contemporary front-end and back-end
                                        frameworks such as jQuery, React, Bootstrap, Bulma, and
                                        Material UI.`}
                    secondSkillDesc={`Adept at interpreting APIs from deployed applications and
                                        creating documentation for applications still in
                                        development.`}
                    thirdSkillDesc={`Skilled in applying database technologies to store,
                                        retrieve, and analyze data generated from small to large
                                        scale web applications.`}
                />
            </Stack>
        </section>
    )
};


