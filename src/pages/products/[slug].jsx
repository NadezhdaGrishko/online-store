import { Box } from '@mui/system';
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const [slug] = () => {
  const params = useParams()
  const slug = params.slug || 'all'

  return (
    <Box sx={{mt:'5rem'}}>
      slug
    </Box>
  )
}

export default [slug]