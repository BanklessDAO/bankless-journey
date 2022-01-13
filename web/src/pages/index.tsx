import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text } from '@chakra-ui/react'
import { GetStaticProps } from "next"
import React, { useEffect } from "react"
import NextLink from "next/link"
import Router from "next/router"
import { getJourneys } from "services/journey"
import { Journey } from "types"
import { DEFAULT_REVALIDATE_PERIOD, DESCRIPTION } from "utils/constants"

interface Props {
  journeys: Array<Journey>
}

export default function HomePage(props: Props) {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == "/") {
      Router.push("/bankless")
    }
  })
  return null
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const journeys = getJourneys()
  
  return {
    props: {
      journeys
    },
    revalidate: DEFAULT_REVALIDATE_PERIOD
  }
}
