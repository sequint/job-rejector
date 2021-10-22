import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './AppliedJobCard.css'

const AppliedJobCard = ({ job }) => {
  console.log(job.id)
  console.log(job.applicants)
  console.log(job);

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  // const saveToLocal = event => {
  //   event.preventDefault()

  //   localStorage.setItem('clickedManageJob', JSON.stringify(job))
  // }

  return (
    <>
      <Card className='m-2'>
        <Card.Header className='status' as='h5'>{job.status}</Card.Header>
        <Card.Body>
          <Card.Title>{job.name}</Card.Title>
          <Card.Text>
            Company: {job.company}
          </Card.Text>
          <Card.Text>
            Department: {job.type}
          </Card.Text>
          <Button
            variant='outline-secondary'
            onClick={handleShow}>
            View More
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {job.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Department:</strong> {job.type}</p>
          <p><strong>Department:</strong> {job.type}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AppliedJobCard
